import { Subject } from 'rxjs'
import { User } from './user.model';
import { AuthData } from './auth-data.model';

export class AuthService{
    authchange=new Subject<boolean>();
    private user:User;
    registeruser(authData:AuthData){
        this.user={
            email:authData.email,
            userId:Math.round(Math.random()*10000).toString()
        };
        this.authchange.next(true);
    }
    login(authData:AuthData){
        this.user={
            email:authData.email,
            userId:Math.round(Math.random()*10000).toString()
        };
        this.authchange.next(true);

    }
    logout(){
        this.user=null;
        this.authchange.next(false);

    }
    getuser(){
        return {...this.user};
    }
    isAuth(){
        return this.user!=null; 
    }
}