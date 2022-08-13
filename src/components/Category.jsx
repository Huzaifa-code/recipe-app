import { FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import { GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


function Category() {
  return (
    <List>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Thai'}>
            <GiNoodles />
            <h4>Thai</h4>
        </SLink>
        <SLink to={'/cuisine/Japanese'}>
            <GiChopsticks />
            <h4>Japanese</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 1.5rem 0;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient( 35deg, #494949, #313131);
    height: 4.5rem;
    width: 4.5rem;
    cursor: pointer;
    transform: scale(0.8);

    @media only screen and (max-width: 600px){
        height: 3rem;
        width: 3rem;
        margin-right: 0.7rem;
    }

    h4{
        color: #fff;
        font-size: 0.7rem;

        @media only screen and (max-width: 600px){
            font-size: 0.45rem;
        } 
    }
    svg{

        color: #fff;
        font-size: 1.3rem;

        @media only screen and (max-width: 600px){
            font-size: 1rem;
        }
    }
    &.active{
        background: linear-gradient( to  right, #f27121, #e94057);
    }
`;

export default Category