import styled from 'styled-components'

export const News = styled.section`
  position: relative;
  .slick-track{
    .slick-slide{
    }

  }
  .slick-arrow{
    background-color: red;
  }
  .slick-next{
    right: 0;
  }
  .slick-prev{
    left: 0;
  }
`

export const Items = styled.div`
  position: relative;
  img{
    height: 400px;
    object-fit: cover;
    width: 100vw;
  }
`

