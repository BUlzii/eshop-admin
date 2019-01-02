import React from 'react';
import { List } from '../../components';
import PageHeaderLayout from "../../layouts/PageHeaderLayout";

const divStyle = {
  width: '90%',
  overflow: 'hidden',
};

export default () => (
  <PageHeaderLayout title="Language information" style={divStyle}>
    <List
      actions={['update']}
      model={'Language'}
      name={'Language'}
    />
  </PageHeaderLayout>
);
