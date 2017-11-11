import React from 'react';

export default ({csrf_param, csrf_token}) => (
  <input type='hidden' name={csrf_param} value={csrf_token}/>
)
