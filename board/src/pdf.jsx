import ReactPDF from "@react-pdf/renderer";

ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);
