import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotIconComponent } from './chatbot-icon.component';

describe('ChatbotIconComponent', () => {
  let component: ChatbotIconComponent;
  let fixture: ComponentFixture<ChatbotIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatbotIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
