import {
  Inject,
  Injectable
} from '@nestjs/common';
import { UserService } from '@/app/modules/user/modules/user/user.service';
import AppConfig from '@/config/app-config';
@Injectable()
export class UserSeedService {
  @Inject(UserService)
  private readonly userService: UserService;

  async seed(){
    const csv = require('csv-parser');
    const fs = require('fs');
    console.log('start parse csv');

    fs.createReadStream('src/database/seeds-data/users.csv')
      .pipe(csv())
      .on('data', (data) => {
        try {
          this.userService.createUser(data);
          console.log(`Seeded: ${JSON.stringify(data)}`);
        }catch (e) {
          console.log(e);
          console.log(`Skipped: ${JSON.stringify(data)}`);
        }
      })
      .on('end', () => {
        console.log('end parse csv');
      });
  }

  async clean() {
    console.log('Start cleaning: users...');
    await this.userService.truncate();
    console.log('Cleaning complete: users.');
  }

  async createAdmin() {
    console.log('Start creating admin...');
    await this.userService.createAdmin({
      name: AppConfig.appInstall.admin_username,
      email: AppConfig.appInstall.admin_email,
      password: AppConfig.appInstall.admin_password
    });
    console.log('Admin user created.');
  }
}
