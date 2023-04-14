import React from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import styles from "./ExcelExport.module.css";

interface IExportToExel {
  apiData: {}[];
  fileName: string;
}
export const ExportToExcel = (props: IExportToExel) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const apiData = props.apiData;
  const fileName = props.fileName;
  const exportToCSV = (apiData: {}[], fileName: string) => {
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, { fileName } + fileExtension);
  };

  return (
    <button
      className={styles.btn}
      onClick={(e) => exportToCSV(apiData, fileName)}
    >
      Export
    </button>
  );
};
