'use client'
import Image from "next/image";

export default function Cards() {
    const response = {
        page: 1,
        results: [
            {
                userId: 1,
                id: 1,
                title:
                    `sunt aut facere repellat provident occaecati excepturi optio reprehenderit`,
                body: `quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto`,
                image: "https://picsum.photos/500",
            },
            {
                userId: 1,
                id: 2,
                title: "qui est esse",
                body: `est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla`,
                image: "https://picsum.photos/500",
            },
            {
                userId: 1,
                id: 3,
                title: `ea molestias quasi exercitationem repellat qui ipsa sit aut`,
                body: `et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut`,
                image: "https://picsum.photos/500",
            },
            {
                userId: 1,
                id: 4,
                title: "eum et est occaecati",
                body: `ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit`,
                image: "https://picsum.photos/500",
            },
            {
                userId: 1,
                id: 5,
                title: "nesciunt quas odio",
                body: `repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque`,
                image: "https://picsum.photos/500",
            },
        ],
    };

    return (
        <div className="w-full min-h-screen flex flex-col items-center px-20 py-10 max-md:px-2 mt-20 max-md:mt-10">
            {response.results.map((isi, index) => (
                    <div key={index} className="bg-black/30 rounded-xl w-[800px] max-md:w-full h-auto max-md:h-auto mb-[80px] grid grid-cols-2 max-md:grid-cols-1 gap-5 p-6 max-md:p-3 max-md:gap-2">
                        <div className="w-full h-full">
                            <Image
                                src={isi.image}
                                alt="logo"
                                width={178}
                                height={142}
                                className="object-contain w-[400px] rounded-xl h-full"
                                priority
                                unoptimized
                            />
                        </div>

                        <div className="flex flex-col gap-5 max-md:gap-2">
                            <h1 className="text-4xl max-md:text-2xl text-blue-400 font-bold">
                                {isi.title}
                            </h1>

                            <p className="text-xl max-md:text-[15px] text-gray-50 text-justify">
                                {isi.body}
                            </p>
                        </div>
                    </div>
                ))}
        </div>
    )
}