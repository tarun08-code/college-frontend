import { Component } from '@angular/core';

@Component({
  selector: 'app-programme-matrix',
  templateUrl: './programme-matrix.component.html',
  styleUrls: ['./programme-matrix.component.css']
})
export class ProgrammeMatrixComponent {
  // Dropdown state management
  isDropdownOpen = false;
  selectedSemester: string | null = null;

  // Available semester options
  semesters = [
    { value: '1', label: 'Semester 1' },
    { value: '2', label: 'Semester 2' },
    { value: '3', label: 'Semester 3' },
    { value: '4', label: 'Semester 4' },
    { value: '5', label: 'Semester 5' },
    { value: '6', label: 'Semester 6' }
  ];

  // Course data (can be moved to a service later)
  courses = [
    {
      semester: 1,
      courseType: 'DSC',
      programmeCode: '24CS01',
      courseCode: '24BCA2T441',
      courseTitle: 'Software Engineering',
      totalHours: 60,
      hoursPerWeek: 4,
      hoursDistribution: { l: 5, t: 5, p: 5 },
      creditDistribution: { l: 5, t: 5, p: '-' },
      credits: 4,
      preRequisite: '24BCA2T441*',
      maxMarks: { fa: 5, sa: 5, total: 10 },
      template: 'not selected'
    },
    {
      semester: 1,
      courseType: 'DSC',
      programmeCode: '24CS01',
      courseCode: '24BCA2T442',
      courseTitle: 'Software Engineering',
      totalHours: 60,
      hoursPerWeek: 4,
      hoursDistribution: { l: 5, t: 5, p: 5 },
      creditDistribution: { l: 5, t: 5, p: 5 },
      credits: 4,
      preRequisite: 'PUC*',
      maxMarks: { fa: 5, sa: 5, total: 10 },
      template: 'not selected'
    }
  ];

  constructor() { }

  /**
   * Toggle the semester dropdown visibility
   */
  toggleSemesterDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  /**
   * Select a semester and close the dropdown
   * @param semester The selected semester value
   */
  selectSemester(semester: string): void {
    this.selectedSemester = semester;
    this.isDropdownOpen = false;
    console.log(`Selected Semester: ${semester}`);

    // You can add filtering logic here to show courses for the selected semester
    // this.filterCoursesBySemester(semester);
  }

  /**
   * Close dropdown when clicking outside (can be implemented with HostListener)
   */
  closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  /**
   * Handle menu item clicks
   * @param menuItem The clicked menu item
   */
  onMenuItemClick(menuItem: string): void {
    console.log(`Menu item clicked: ${menuItem}`);
    // Add navigation logic here
  }

  /**
   * Handle save button click
   */
  onSave(): void {
    console.log('Save clicked');
    // Add save logic here
  }

  /**
   * Handle cancel button click
   */
  onCancel(): void {
    console.log('Cancel clicked');
    // Add cancel logic here
  }

  /**
   * Handle group button click
   */
  onGroupClick(): void {
    console.log('Group button clicked');
    // Add grouping logic here
    // You can get selected items and group them
  }

  /**
   * Handle ungroup button click
   */
  onUngroupClick(): void {
    console.log('Ungroup button clicked');
    // Add ungrouping logic here
    // You can get selected items and ungroup them
  }

  /**
   * Filter courses by selected semester (optional implementation)
   */
  private filterCoursesBySemester(semester: string): void {
    // Implementation for filtering courses
    const filteredCourses = this.courses.filter(course =>
      course.semester === parseInt(semester)
    );
    console.log('Filtered courses:', filteredCourses);
  }
}
