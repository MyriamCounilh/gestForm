import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should 3 equals Geste',  () => {
   expect(component.numberToString(3)).toEqual('Geste');
  });

  it('should 5 equals Forme',  () => {
   expect(component.numberToString(5)).toEqual('Forme');
  });

  it('should 4 equals 4',  () => {
   expect(component.numberToString(4)).toEqual('4');
  });

  it('should 6 equals 6',  () => {
   expect(component.numberToString(6)).toEqual('Geste');
  });

  it('should 14 equals 14',  () => {
   expect(component.numberToString(14)).toEqual('14');
  });

  it('should 15 equals Gestform',  () => {
   expect(component.numberToString(15)).toEqual('Gestform');
  });


});
