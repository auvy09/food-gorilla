

const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="flex space-x-10">
            <img style={{ borderRadius: '0 150px 150px 150px' }} className='w-[110px] ' src={image} alt="" />
            <div className="text-slate-300">
                <h3 className="uppercase font-semibold mb-2">{name}</h3>
                <p>{recipe}</p>
            </div>
            <p>${price}</p>

        </div>
    );
};

export default MenuItem;