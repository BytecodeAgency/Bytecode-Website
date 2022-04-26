import React from "react";
import { getEmployee } from "./content";
import { TeamMember } from "../containers";

export type EmployeeName = "jeroen" | "nick" | "chris" | "tiko" | "suzanne";

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