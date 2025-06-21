import { Button } from "@/src/components/shared/button";
import CategoryItem from "@/src/components/categories_page/category_item";
import PageLayout from "@/src/components/layout/page_layout";
import styled from "styled-components";
import { useCategoryStore } from "@/src/stores/categories_store";
import { BB } from "@/src/components/shared/typography";
import { show } from "@oktapod/modal";
import Modals from "@/src/components/modals";

const CategoryList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.size.l};
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const FallbackWrapper = styled.div`
  padding: ${({ theme }) => theme.size.xl5};
  display: flex;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  padding: ${({ theme }) => theme.size.xl2};
  display: flex;
  justify-content: center;
`;

export default function CategoriesPage() {
  const { categories, addCategory, updateCategory, deleteCategory } =
    useCategoryStore();

  function handleCreate() {
    show(Modals.ADDCATEGORY, {
      onSubmit: async (category) => {
        return await addCategory(category);
      },
    });
  }

  function handleUpdate(category) {
    show(Modals.UPDATECATEGORY, {
      initialValues: category,
      onSubmit: async (category) => {
        return await updateCategory(category);
      },
    });
  }

  function handleDelete(id) {
    show(Modals.DELETECATEGORY, { id, deleteCategory });
  }

  return (
    <PageLayout title="Categories">
      <CategoryList>
        {categories.length === 0 ? (
          <FallbackWrapper>
            <BB>No categories available.</BB>
          </FallbackWrapper>
        ) : (
          categories.map((cat) => (
            <CategoryItem
              key={cat.id}
              label={cat.name}
              color={cat.color}
              onEdit={() => handleUpdate(cat)}
              onDelete={() => handleDelete(cat.id)}
            />
          ))
        )}
      </CategoryList>
      <ButtonWrapper>
        <Button label="Add Category" onClick={handleCreate} />
      </ButtonWrapper>
    </PageLayout>
  );
}
