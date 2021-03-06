/**
 * @File   : index.tsx
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 2018-4-18 19:06:13
 * @Link: dtysky.moe
 */
import * as React from 'react';
import {Link} from 'react-router-dom';
import * as cx from 'classnames';
import Icon from 'antd/es/icon';
import 'antd/es/icon/style/css';
import Button from 'antd/es/button';
import 'antd/es/button/style/css';
import Select from 'antd/es/select';
import 'antd/es/select/style/css';

import {tags} from '../../routes';
import './base.scss';

const dataSource = tags.slice(0).map(tag => ({value: tag, label: tag}));

interface IStateTypes {
  searchParams: string[];
}

export default class Topbar extends React.PureComponent<{}, IStateTypes> {
  public state: IStateTypes = {
    searchParams: []
  };

  private handleSearchSelect = (values: string[]) => {
    this.setState({searchParams: values});
  }

  public render() {
    return (
      <header className={cx('pd-topbar')}>
        <Link
          className={cx('pd-topbar-logo')}
          to={'/'}
        >
          <h1>Paradise</h1>
          <p>Collection of amazing effects.</p>
        </Link>
        <div className={cx('pd-topbar-search')}>
          <Select
            mode={'tags'}
            size={'large'}
            style={{width: '100%'}}
            onChange={this.handleSearchSelect}
            value={this.state.searchParams}
            placeholder={'input tag or platform'}
          >
            {
              dataSource.map(({value, label}) => (
                <Select.Option key={value} value={value}>
                  {label}
                </Select.Option>
              ))
            }
          </Select>
          <Link
            to={`/tags?${this.state.searchParams.join('&')}`}
          >
            <Button
              size={'large'}
              type={'primary'}
            >
              <Icon type={'search'} />
            </Button>  
          </Link>
        </div>
      </header>
    );
  }
}
