'use client';

import { useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { DataTablePagination } from '@/components/ui/data-table-pagination';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  teamName: string;
  isTeamLeader: boolean;
  avatar?: string;
};

interface EmployeesTableProps {
  employees: Employee[];
}

const PAGE_SIZE = 5;

export function EmployeesTable({ employees }: EmployeesTableProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(employees.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedEmployees = employees.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead />
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Team</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedEmployees.map(employee => (
            <TableRow key={employee.id} className="h-14">
              <TableCell>
                <Avatar>
                  <AvatarImage src={employee.avatar} alt={`${employee.firstName} ${employee.lastName}`} />
                  <AvatarFallback className="bg-primary dark:bg-muted text-white">
                    {employee.firstName.charAt(0)}
                    {employee.lastName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>{employee.firstName}</TableCell>
              <TableCell>{employee.lastName}</TableCell>
              <TableCell>{employee.teamName}</TableCell>
              <TableCell>
                {employee.isTeamLeader && (
                  <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
                    Team Leader
                  </Badge>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <DataTablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        pageSize={PAGE_SIZE}
        totalItems={employees.length}
        onPageChange={setCurrentPage}
      />
    </>
  );
}
