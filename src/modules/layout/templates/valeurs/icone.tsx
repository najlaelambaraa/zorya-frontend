import React from 'react';

type IconeProps = {
    svg: string;
};

const Icone: React.FC<IconeProps> = ({ svg }): JSX.Element => {
    return (
        <div className="w-6 h-6 md:w-8 md:h-8">
            <img src={svg} alt="Icône" />
        </div>
    );
};

export default Icone;
