import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarItemsInterface } from './navbar-items.constant';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Documents', () => {
    const items: NavbarItemsInterface[] = [
      {
        icon: 'description',
        name: 'Documents'
      },
    ]
    component.navbarItems = items;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.navbar__item--name')?.textContent).toContain('Documents');
  });

  it('should render mat-icon', () => {
    const items: NavbarItemsInterface[] = [
      {
        icon: 'description',
        name: 'Documents'
      },
    ]
    component.navbarItems = items;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-icon')).not.toBeNull();
    expect(compiled.querySelector('mat-icon')?.textContent).toContain('description');
  });

  it('should not render description', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-icon')?.textContent).not.toContain('description');
  });
});
