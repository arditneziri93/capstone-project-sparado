import { Button } from "@/src/components/shared/button";
import CategoryItem from "@/src/components/categories_page/category_item";
import PageLayout from "@/src/components/layout/page_layout";
import styled from "styled-components";
import { useCategoryStore } from "@/src/stores/categories_store";
import { BB } from "@/src/components/shared/typography";

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

export default function HomePage() {
  const { categories } = useCategoryStore();
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
              label={cat.name}
              key={cat.id}
              color={cat.color}
              onEdit={() => {}}
              onDelete={() => {}}
            />
          ))
        )}
      </CategoryList>
      <ButtonWrapper>
        <Button label="Add Category" onClick={() => alert("Add Category")} />
      </ButtonWrapper>
    </PageLayout>
  );
}
