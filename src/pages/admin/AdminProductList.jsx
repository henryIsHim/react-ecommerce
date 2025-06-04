

export default function AdminProductList() {
    return (
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-gray-50">
            <div
                className="relative border border-gray-300 bg-white rounded-md shadow-sm shadow-gray-200 px-5 py-3"
            >
                <div className="flex justify-end mb-3">
                    <a
                        className="text-sm px-4 flex items-center gap-3 shadow-md py-3 text-white bg-primary hover:bg-blue-900 font-semibold rounded-md transition-all active:animate-press"
                        href="/productCreate.html"
                    >
                        Create
                    </a>
                </div>
                <div
                    className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-md overflow-hidden border"
                >
                    <div className="overflow-x-auto w-full">
                        <table className="w-full text-sm text-left">
                            <thead className="text-white bg-primary">
                                <tr>
                                    <th scope="col" className="px-6 py-3 min-w-[100px]">
                                        <span className="capitalize p-1.5"> ID </span>
                                    </th>

                                    <th scope="col" className="px-6 py-3 min-w-[100px]">
                                        <span className="capitalize p-1.5"> Preview </span>
                                    </th>
                                    <th scope="col" className="px-6 py-3 min-w-[100px]">
                                        <span className="capitalize p-1.5"> Category </span>
                                    </th>
                                    <th scope="col" className="px-6 py-3 min-w-[100px]">
                                        <span className="capitalize p-1.5"> Name </span>
                                    </th>

                                    <th scope="col" className="px-6 py-3 min-w-[100px]">
                                        <span className="capitalize p-1.5"> Price </span>
                                    </th>

                                    <th scope="col" className="px-6 py-3 min-w-[100px]">
                                        <span className="capitalize p-1.5"> Priority </span>
                                    </th>
                                    <th scope="col" className="px-6 py-3 min-w-[100px]">
                                        <span className="capitalize p-1.5"> Description </span>
                                    </th>
                                    <th scope="col" className="px-6 py-3 min-w-[100px]">
                                        <span className="capitalize p-1.5"> Actions </span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="px-6 py-4">
                                        <span className="text-darkGray p-1.5 font-semibold block">
                                            1
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-darkGray p-1.5 font-semibold block">
                                            <img
                                                src="https://cdn.prod.website-files.com/62f51a90d298e65b94bbffcd/62f6a67c4666f047ada3ba87_image-10-shop-product-shopwave-template-p-500.png"
                                                alt="Product Image"
                                                className="w-16 h-16 object-cover"
                                            />
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 min-w-[150px]">
                                        <span className="text-darkGray p-1.5 font-semibold block">
                                            Category
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 min-w-[150px]">
                                        <span className="text-darkGray p-1.5 font-semibold block">
                                            Product Name
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 min-w-[150px]">
                                        <span className="text-darkGray p-1.5 font-semibold block">
                                            10000 MMK
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 min-w-[150px]">
                                        <span className="text-darkGray p-1.5 font-semibold block">
                                            1
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className="text-darkGray min-w-[400px] p-1.5 font-semibold w-full line-clamp-2 block"
                                        >
                                            Lorem ipsum dolor sit amet consectetur adipisicing
                                            elit. Dolores, et accusamus ad corporis quaerat
                                            explicabo error, adipisci recusandae ullam nesciunt
                                            nobis aut, facere maiores corrupti! Itaque, fugiat.
                                            Totam fuga beatae, nihil blanditiis modi unde
                                            numquam quia nostrum repudiandae eius animi dolores
                                            laboriosam corrupti nobis fugit vel, quos voluptatem
                                            odit autem.
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div
                                            className="space-x-3 flex items-center min-w-[200px] w-auto max-w-[500px]"
                                        >
                                            <a
                                                href=""
                                                className="text-sm px-4 flex items-center gap-3 shadow-md py-3 text-white bg-primary hover:bg-blue-900 font-semibold rounded-md transition-all active:animate-press"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"
                                                    />
                                                </svg>
                                                Edit
                                            </a>
                                            <a
                                                href=""
                                                className="text-sm px-4 flex items-center gap-3 shadow-md py-3 text-white bg-red-500 hover:bg-blue-900 font-semibold rounded-md transition-all active:animate-press"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M5 21V6H4V4h5V3h6v1h5v2h-1v15zm2-2h10V6H7zm2-2h2V8H9zm4 0h2V8h-2zM7 6v13z"
                                                    />
                                                </svg>
                                                Delete
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
