import React from "react";
import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Page,
	Search,
	Sort,
	Edit,
	Inject,
	Toolbar,
} from "@syncfusion/ej2-react-grids";

import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../Components";

const Employees = () => {
	const editing = { allowDeleting: true, allowEditing: true };
	return (
		<div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
			<Header category="Page" title="Employees" />
			<GridComponent
				id="gridcomp"
				dataSource={employeesData}
				allowPaging
				allowSorting
				pageSettings={{ pageCount: 5 }}
				editSettings={editing}
				toolbar={["Search"]}
				width="auto"
			>
				<ColumnsDirective>
					{employeesGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject services={[Page, Sort, Edit, Search, Toolbar]} />
			</GridComponent>
		</div>
	);
};

export default Employees;
