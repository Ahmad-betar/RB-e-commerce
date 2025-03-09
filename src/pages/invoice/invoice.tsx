import { useState } from "react";
import InvoicePayment from "./invoice-payment";
import Header from "@/layout/header";
import InvoiceDetails from "./invoice-details";
import { checkoutResponse } from "@/api/checkout/type";
import Footer from "@/layout/footer";

const Invoice = () => {
  const [Page, setPage] = useState(0);
  const [data, setData] = useState<checkoutResponse>(); //check out data

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <>
      <Header />

      {Page === 0 && (
        <InvoiceDetails
          setData={setData}
          onChange={handlePageChange.bind(null, 1)}
        />
      )}

      {Page === 1 && (
        <InvoicePayment data={data} onChange={handlePageChange.bind(null, 0)} />
      )}

      <Footer />
    </>
  );
};
export default Invoice;
