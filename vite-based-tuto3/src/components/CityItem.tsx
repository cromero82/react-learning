const CityItem: React.FC<any> = ({ cityItem }) => {
    if (cityItem == 'San francisco') {
        return <li key={cityItem} className="bg-warning list-group-item"> {cityItem} </li>
    } else {
        return <li key={cityItem} className="list-group-item"> {cityItem} </li>
    }
};

// using interface definition was desabled
// ...
// interface CityItemProps {
//     city: string;
// }

// const CityItem: React.FC<CityItemProps> = ({ city }) => {
//     return <li className="list-group-item">{city}</li>;
// };

export default CityItem;