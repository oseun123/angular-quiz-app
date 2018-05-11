import { TestBed, inject } from '@angular/core/testing';

import { QuizmetricService } from './quizmetric.service';

describe('QuizmetricService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizmetricService]
    });
  });

  it('should be created', inject([QuizmetricService], (service: QuizmetricService) => {
    expect(service).toBeTruthy();
  }));
});
