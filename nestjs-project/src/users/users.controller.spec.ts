import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import RegisterInterface from './interface/RegisterInterface';
import { CacheModule } from '@nestjs/cache-manager';
// import { CacheModule } from '@nestjs/common';

const mockUsersService = {
  getUsers: jest.fn(),
  createNewUser: jest.fn(),
  login: jest.fn(),
};

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
      imports: [CacheModule.register()], // Ensure CacheModule is imported

    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getUsers', () => {
    it('should return an array of users', async () => {
      const mockUsers: RegisterInterface[] = [
        {
          _id: "65a3aa4136f9badf85830a82",
          name: {
            first: "john",
            middle: "",
            last: "doe",
            _id: "65a3aa4136f9badf85830a83"
          },
          phone: "0504567890",
          email: "psh28497@gmail.com",
          password: "$2a$10$Phuyu7OAUidDYx9AIE5Kd.uIfS6cZ2ANxvQeUlID0y2z93EBIHt36",
          image: {
            url: "https://example.com/profile.jpg",
            alt: "profile picture",
            _id: "65a3aa4136f9badf85830a84"
          },
          address: {
            state: "",
            country: "united states",
            city: "new york",
            street: "123 main street",
            houseNumber: 45,
            zip: 10001,
            _id: "65a3aa4136f9badf85830a85"
          },
          isAdmin: false,
          createdAt: new Date("2024-01-14T12:00:00.000Z"), // Use Date object here
          __v: 0
        }
      ];

      mockUsersService.getUsers.mockResolvedValue(mockUsers);

      const result = await controller.getUsers();

      expect(result).toEqual(mockUsers);
      expect(mockUsersService.getUsers).toHaveBeenCalled();
    });

    // Uncomment this test once you have implemented error handling in your controller
    // it('should handle errors and return an error message', async () => {
    //   const errorMessage = 'An error occurred';
    //   mockUsersService.getUsers.mockRejectedValue(new Error(errorMessage));

    //   await expect(controller.getUsers()).rejects.toThrow(new Error(errorMessage));
    //   expect(mockUsersService.getUsers).toHaveBeenCalled();
    // });
  });

  // Uncomment and implement similar tests for other controller methods
  // describe('getUser', () => {
  //   it('should return user details by userId', () => {
  //     const mockUserId = '123';
  //     const result = controller.getUser(mockUserId);
  //     expect(result).toEqual({ userId: mockUserId });
  //   });

  //   it('should throw NotFoundException if user is not found', () => {
  //     const mockUserId = 'nonexistent';
  //     expect(() => controller.getUser(mockUserId)).toThrowError(NotFoundException);
  //   });
  // });

  // Add similar tests for other controller methods (register, updateUserInfo, login, changeStatus, deleteUser)
});
