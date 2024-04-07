import PropTypes from 'prop-types';

export const Navlink = ({ href, children }) => {
    return (
        <a href={href} className='block py-2 pl-3 pr-4 font-customFont3 font-semibold text-[#FFD700] sm:text-2xl  md:p-0 hover:text-zinc-50'>
            {children}
        </a> 
    )
}

Navlink.propTypes = {
    href: PropTypes.string.isRequired,  
    children: PropTypes.node.isRequired,
};
