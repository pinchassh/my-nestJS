import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getModelToken } from '@nestjs/mongoose'; // Import getModelToken
import { Model } from 'mongoose';
import RegisterInterface from './interface/RegisterInterface';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getModelToken('User'), // Use the correct token for UserModel
          useValue: {} as Model<RegisterInterface>, // Mock or actual implementation of UserModel
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
