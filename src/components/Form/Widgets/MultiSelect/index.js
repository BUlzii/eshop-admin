import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const { Option } = Select;

class MultiSelect extends Component {
  render() {
    return (
      <Select
        mode="multiple"
        size="small"
        placeholder={`${this.props.schema.label} сонгох`}
        defaultValue={this.props.value ? (typeof this.props.value === 'number') ? this.props.value.toString() : this.props.value : this.props.value}
        onChange={value => this.props.onChange(value)}
      >
        {this.props.schema.options.map(({ id, name, parent }, i) => {
          let returnObject;
          if (this.props.schema.parent && this.props.schema.parent.length) {
            let parentValue;
            try {
              parentValue = this.props.schema.parent.reduce((result, key) => {
                if (result) return result[key];
                throw new Error('Object not found');
              }, this.props.formContext);
            } catch (error) {
              parentValue = false;
            }
            returnObject = (parent === parentValue) ? (
              <Option key={i}>
                {name}
              </Option>
            ) : undefined;
          } else {
            returnObject = (
              <Option key={i}>
                {name}
              </Option>
            );
          }
          return returnObject;
        })}
      </Select>
    );
  }
}

MultiSelect.defaultProps = {
  value: undefined,
  placeholder: '',
  options: {},
  formContext: {},
  disabled: false,
};

MultiSelect.propTypes = {
  value: PropTypes.any,
  required: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  schema: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.object,
  formContext: PropTypes.object,
  disabled: PropTypes.bool,
};

export default MultiSelect;
