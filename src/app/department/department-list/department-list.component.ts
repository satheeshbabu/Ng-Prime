import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { RouteState } from '../../models/routeState.model';
import { Router } from '@angular/router';
import { RouteStateService } from '../../services/routeState.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  columns: any[];

  departments: any[];

  constructor(private departmentService: DepartmentService, private routeStateService: RouteStateService, private router: Router) {
    this.columns = [
      { field: 'Name', header: 'Name' },
      { field: 'Description', header: 'Description' }];
  }

  ngOnInit() {
    this.departments = this.departmentService.getAllDepartments();
  }

  goToDepartmentDetails(department: number) {
    this.routeStateService.loadNewRouteState("Department details","/home/departments/department-detail", department, false);
  }

}
