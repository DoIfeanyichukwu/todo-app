import React from 'react'
import styled from 'styled-components'
import {MdDeleteOutline} from 'react-icons/md'


const Button = styled.button`
    display: block;
    border: none;
    background: transparent;
    color: #bdbdbd;
    cursor: pointer;

    & > .delete_icon {
        width: 24px;
        height: 24px;
    }
`

const Delete = (props) => {
  return (
      <Button>
          <MdDeleteOutline className='delete_icon'/>
      </Button>
  )
}

export default Delete