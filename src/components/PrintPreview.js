import React from 'react';
import jsPDF from "jspdf";
import bgImage from "../assets/bgtemplatenew.png";

const PrintPreview = ({data, isVisible, setIsFormReady}) => {

	const handleDownload = () => {
		var doc = new jsPDF("p", "px", "a4");
		doc.html(document.querySelector('#content'), {
		  callback: function (pdf) {
		   pdf.save("Letter.pdf");
		  },
		})

		var pageCount = doc.internal.getNumberOfPages();

		console.log(pageCount);
	  }


	return (
		<div className={isVisible ? "block" : "hidden"}>
			<div className="flex items-center justify-center">
				<div className="template-background" id="content">
					<img src={bgImage} alt="data" />
					<p className="letterHeading">{data.letterHeading}</p>
				</div>
			</div>
			<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-6" onClick={handleDownload}>Print</button>
			<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-6" onClick={() => setIsFormReady(!isVisible)}>Go Back</button>
		</div>
	)
}

export default PrintPreview;