import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-layout',
  templateUrl: './test-layout.component.html',
  styleUrls: ['./test-layout.component.scss'],
})
export class TestLayoutComponent {
  MODES: Array<string> = ['over', 'push', 'slide'];
  POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];
  @Input() isAppBar = false;
  @Input() isDockAppBar = false;
  @Input() isSideBar = false;
  @Input() isDocksideBar = false;
  @Input() isFooter = false;
  @Input() isDockFooter = false;
  @Input() sidePosition = 0;
  @Input() sidebarClass?: string = 'side-bar-bg w-100';
  @Input() appBarClass?: string;
  @Input() footerBarClass?: string;
  @Input() topBarClass?: string;
  @Input() isTopBar = false;
  @Input() isDockTop = false;
  @Input() isDrawer = false;
  @Input() drawerClass = '';
  @Input() isDockDrawer = false;
  isDockerAppBarSize: string;
  animate = true;
  toggleTopOpened() {
    this.isTopBar = !this.isTopBar;
  }
  toggleDrawerOpened() {
    this.isDrawer = !this.isDrawer;
  }
  toggleAppBarOpened() {
    this.isAppBar = !this.isAppBar;
    this.isSideBar = false;
  }
  toggleSideBarOpened() {
    this.isSideBar = !this.isSideBar;
  }
  toggleFooterOpened() {
    this.isFooter = !this.isFooter;
  }
  minifyAppBar() {
    this.isDockAppBar = !this.isDockAppBar;
    this.isDockerAppBarSize = '20px';
  }
}
