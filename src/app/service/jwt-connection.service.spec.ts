import { TestBed } from '@angular/core/testing';

import { JwtConnectionService } from './jwt-connection.service';

describe('JwtConnectionService', () => {
    let service: JwtConnectionService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(JwtConnectionService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
