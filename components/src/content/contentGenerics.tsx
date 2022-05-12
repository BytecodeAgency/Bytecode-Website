import React from "react";
import { getEmployee } from "./content";
import { TeamMember } from "../containers";

export const Employees = [
	"jeroen",
	"nick",
	"chris",
	"tiko",
	"suzanne",
	"nietzsche"
];

export type EmployeeName = typeof Employees[number];

type EmployeeProps = {
    name: EmployeeName
}
export const EmployeeCard = ({ name }: EmployeeProps) => {
	const employee = getEmployee(name);
	if(!employee){
		return null;
	}
	return <TeamMember member={employee} />;
};