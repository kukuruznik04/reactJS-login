import { LoginEntity, MemberEntity } from "../../model";

interface User {
    id?: string;
    name?: string;
}

const baseURL = 'https://fast-fjord-69046.herokuapp.com';


// export const isValidLogin = (loginInfo: LoginEntity): boolean =>
//   (loginInfo.login === 'admin' && loginInfo.password === 'test');

export const isValidLogin = (loginInfo: LoginEntity): Promise<any> => {
    const loginURL = `${baseURL}/login`;

    return fetch(loginURL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo)
    }).then(res => res.json())
};

export let user: User = {};
