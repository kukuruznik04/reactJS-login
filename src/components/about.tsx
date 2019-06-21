import * as React from 'react';
import { AppView } from '../layout';
import { user } from '../api/login';

export const About: React.StatelessComponent<{}> = () => {
  return (
    <AppView>
      <div className="row about-page col-12">

        <div className="col-12" id="header-title">
          <h1>
            <small>Имя пользователя.</small>
          </h1>
          <div className="col-10">
            <h3>
              <small>{user.name}</small>
            </h3>
          </div>

        </div>
      </div>
    </AppView>
  );
}
