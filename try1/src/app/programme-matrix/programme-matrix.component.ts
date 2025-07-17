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

  // Search functionality
  searchQuery = '';

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
   * Handle search input
   */
  onSearchInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchQuery = target.value;
    console.log('Search query:', this.searchQuery);

    // Add search functionality here
    // You can filter courses, navigate to search results, etc.
    this.performSearch(this.searchQuery);
  }

  /**
   * Perform search operation
   */
  private performSearch(query: string): void {
    if (!query.trim()) {
      return;
    }

    // Example search implementation
    const searchResults = this.courses.filter(course =>
      course.courseTitle.toLowerCase().includes(query.toLowerCase()) ||
      course.courseCode.toLowerCase().includes(query.toLowerCase()) ||
      course.programmeCode.toLowerCase().includes(query.toLowerCase())
    );

    console.log('Search results:', searchResults);
    // You can emit events, navigate, or update component state based on search results
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

  /**
   * Add a new row to the course table
   */
  onAddRow(): void {
    const newCourse = {
      semester: 1,
      courseType: 'DSC',
      programmeCode: '',
      courseCode: '',
      courseTitle: '',
      totalHours: 0,
      hoursPerWeek: 0,
      hoursDistribution: { l: 0, t: 0, p: 0 },
      creditDistribution: { l: 0, t: 0, p: 0 },
      credits: 0,
      preRequisite: '',
      maxMarks: { fa: 0, sa: 0, total: 0 },
      template: 'not selected'
    };

    this.courses.push(newCourse);
    console.log('New row added:', newCourse);
  }

  /**
   * Delete a row from the course table
   * @param index The index of the row to delete
   */
  onDeleteRow(index: number): void {
    if (this.courses.length > 1) { // Prevent deleting the last row
      this.courses.splice(index, 1);
      console.log(`Row ${index} deleted`);
    } else {
      console.log('Cannot delete the last row');
    }
  }

  /**
   * Calculate the total credits from all courses
   * @returns The sum of all course credits
   */
  getTotalCredits(): number {
    return this.courses.reduce((total, course) => total + course.credits, 0);
  }
}
