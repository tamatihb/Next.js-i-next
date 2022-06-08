import React from 'react';


const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,

}) => {
  return (
    
    <div className="container mx-auto rounded-lg ">
     
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
        <div
          className="inline-block min-w-full shadow-md rounded-lg rounded-br-extraLarge  overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider ">
                  Cryptocurrency
                </th>
                <th
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Price
                </th>
                <th
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Market Cap
                </th>
                <th
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Total Volume 
                </th>
              {/* add small graphs to show past price points */}
                {/* market cap and volume to add */}
              </tr>
            </thead>
            <tbody>
              
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex">
                    <div className="flex-shrink-0 w-10 h-10">
                      <img
                        className="w-full h-full rounded-full"
                        src={image}
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {name}
                      </p>
                      <p className="text-gray-400 whitespace-no-wrap">{symbol}</p>

                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">${price}</p>
                  <p className="text-gray-400 whitespace-no-wrap">USD</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-400 whitespace-no-wrap">{marketcap}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-400 whitespace-no-wrap">{volume}</p>
                </td>
  
              
            </tbody>
          </table>

          
        </div>
      </div>
    </div>
 
  

  )}

export default Coin;