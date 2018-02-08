import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadfilesigaComponent } from './uploadfilesiga.component';

describe('UploadfilesigaComponent', () => {
  let component: UploadfilesigaComponent;
  let fixture: ComponentFixture<UploadfilesigaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadfilesigaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadfilesigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
