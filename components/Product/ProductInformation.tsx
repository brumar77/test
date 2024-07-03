

type ProductInformationProps = {
  title: string;
  subtitle: string;
  description: string;
  price?: number;
};

export const ProductInformation = ({ title, subtitle, description, price }: ProductInformationProps) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <h3 className="text-lg font-bold mb-2">{subtitle}</h3>
      <p className="text-lg">{description}</p>
      {/* <p className="text-lg font-bold mt-3">Price: $ {price}</p> */}
    </>
  );
};
