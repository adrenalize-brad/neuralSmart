import styled from 'styled-components'
import { window } from 'browser-monads'

let windowHeight = window.innerHeight;
console.log(windowHeight)

const MainDisplay = styled.div`
    position:absolute;
    top: ${props => props.display === 'open' ? props.browserType === 'mobile' ? '80px' : '50%' : '50%'};
    left: ${props => props.display === 'open' ? props.browserType === 'mobile' ? '0' : `0` : `50%` };
    transform: ${props => props.display === 'open' ? props.browserType === 'mobile' ? 'translateX(0)' : `translate(175px, -50%)` : `translate(-50%, -50%) rotateX(180deg)` };
    transition:0.3s;
    height: ${props => props.display === 'open' ? props.browserType === 'mobile' ? `calc(${windowHeight}px - 90px)` : `calc(100% - 30px)` :  props.browserType === 'mobile' ? 'calc(100% - 20px)' : '50%' };
    width: ${props => props.display === 'open' ? props.browserType === 'mobile' ? 'calc(100% - 10px)' : `calc(100% - 190px)` : props.browserType === 'mobile' ? 'calc(100% - 20px)' : `50%` };
    border-radius: ${props => props.display === 'open' ? props.browserType === 'mobile' ? '0 15px 15px 0' : '15px 15px 15px 15px' : '15px 15px 15px 15px'};
`

const MenuDisplay = styled.div`
    position:absolute;
    top: ${props => props.browserType === 'mobile' ? props.menuToggle === true ? '0' : '-140px' : '50%' };
    left: 0;
    transform: ${props => props.display === 'open' ? `translate(0, -50%)` : `translate( -160px, -50%)` };
    transition:0.3s;
    transition-delay: 0.125s;
    height: ${props => props.browserType === 'mobile' ? '140px' : 'calc(100% - 30px)' };
    width: ${props => props.browserType === 'mobile' ? 'calc(100% - 10px)' : '160px' };
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    z-index:99;
`

const MenuItemWrapper = styled.div`
    position: absolute;
    top: ${props => props.browserType === 'mobile' ? '150px' : '' };
    bottom: ${props => props.browserType === 'mobile' ? '' : '0' };
    left:${props => props.menuToggle === true ? '0' : '-100vw'};
    transition:0.3s;
    transition-delay: 0.125s;
    width: 170px;
    height: ${props => props.browserType === 'mobile' ? `calc(${windowHeight}px - 90px)` : `100%` };
`

export { MainDisplay, MenuDisplay, MenuItemWrapper }