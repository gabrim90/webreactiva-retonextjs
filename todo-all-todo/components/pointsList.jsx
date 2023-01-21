export default function PointsList(props){

    return(
        <div className="px-4">
        {props.pointsList.map((item,index) => 
            <div key={index} className="flex mb-4 w-full items-start">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 mt-1 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 pt-1" />
            <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900">{item}</label>
            </div>
        
        )} 
        </div>
    )

}