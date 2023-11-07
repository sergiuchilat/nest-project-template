import {
  Inject,
  Injectable
} from '@nestjs/common';
import { UserService } from "@/app/modules/user/modules/user/user.service";
import AppConfig from "@/config/app-config";

@Injectable()
export class UserSeedService {
  @Inject(UserService)
  private readonly userService: UserService;
  private parseFinished = false;
  constructor() {}

    async insertUsers() {
        console.log('check parse finished', this.parseFinished)
        if (this.parseFinished){
            await this.userService.createUser({
                name: 'before1',
                email: 'before1@domain.com',
                password: '123456',
            })
        }
    }
  async seed(){
      // setInterval(this.insertUsers, 1000);
      // const csv = require('csv-parser')
      // const fs = require('fs')
      // const results = [];
      // const userService = this.userService
      // console.log('start parse csv')
      // // await userService.createUser({
      // //     name: 'before1',
      // //     email: 'before1@domain.com',
      // //     password: '123456',
      // // })
      //   await pipeline(
      //
      // fs.createReadStream('src/database/seeds-data/users.csv')
      //     .pipe(csv())
      //     .on('data', (data) => {
      //         console.log('data', data)
      //         this.users.push(data)
      //         //         userService.createUser(user)
      //         //         console.log(`Seeded: ${JSON.stringify(user)}`);
      //         results.push(data)
      //     })
      //     .on('end', () => {
      //         //console.log(results)
      //         // for (const user of results) {
      //         //     try {
      //         //         console.log(this.userService)
      //         //         userService.createUser(user)
      //         //         console.log(`Seeded: ${JSON.stringify(user)}`);
      //         //     }catch (e) {
      //         //         console.log(e)
      //         //         console.log(`Skipped: ${JSON.stringify(user)}`);
      //         //     }
      //         // }
      //         console.log(this.users)
      //         //this.insertUsers()
      //         this.parseFinished = true
      //     });
      //   console.log('end parse csv')
      //
      // // await userService.createUser({
      // //     name: 'after1',
      // //     email: 'after1@domain.com',
      // //     password: '123456',
      // // })
  }

    async clean() {
        console.log('Start cleaning: users...')
        await this.userService.truncate();
        console.log('Cleaning complete: users.')
    }

    async createAdmin() {
        console.log('Start creating admin...')
        await this.userService.createAdmin({
            name: AppConfig.appInstall.admin_username,
            email: AppConfig.appInstall.admin_email,
            password: AppConfig.appInstall.admin_password
        })
        console.log('Admin user created.')
    }
}
