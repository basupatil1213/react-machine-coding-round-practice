
export default function Container({ childrens, tailwindCssStyles }) {
  return (
    <div className={tailwindCssStyles}>
      {childrens}
    </div>
  );
}