import { useEffect,useState } from 'react'

const tabs=['posts','comments','albums']
function CallAPI() {

    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [goToTop, setShowGoToTop] = useState(false)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())   //trả về promise của res.json để chờ trả về obj đc convert sang js
            .then(posts => {       //nhận lại dữ liệu res đặt tên là post
                setPosts(posts);
            })
    }, [type])

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true)
            } else {
                setShowGoToTop(false)
            }

            // setShowGoToTop(window.scrollY >= 200)
        }

        window.addEventListener('scroll', handleScroll)

        //Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
    return (
        <>
            {tabs.map(i => (
                <button style={type === i ? {
                    color: '#fff',
                    background: '#333',
                } : {}} onClick={() => setType(i)} key={i}>{i}</button>
            ))}
            <ul>
                {posts.map(i => (
                    <li key={i.id}>{i.title || i.name}</li>
                ))}
            </ul>
            {goToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}
                >
                    Go To Top
                </button>
            )}
        </>
    )
}

export default CallAPI

/*
Để làm được bài này:
B1: gọi API
_ tạo mảng gồm những mục lục
_ tạo state post để lưu data được gọi từ API, dùng map rãi nó ra thẻ li để render giao diện
_ tạo state type để lưu giá trị hiện tại trong mảng 
_ dùng useEffect để API chỉ gọi khi type thay đổi, nhằm tối ưu performance
B2: làm giao diện
_ dùng hàm map để rãi mảng đã tạo trong thẻ button, xây dựng event onClick và setType là phần tử của mảng và style để tô đậm phần tử được chọn trong mảng

Hoạt động: khi click vào phần tử albums, nó sẽ tô đâm vào nút albums đồng thời nó sẽ chạy hàm useEffect gọi API ứng với type đã chọn, sau đó trả về res có tên là albums.
Vì đẫ dùng map với albums trong thẻ li nên nó sẽ render các albums được gọi lên giao diện người dùng

Trong hàm useEffect, khi return {} thì gọi là clean up để xóa bỏ những thử mình muốn
*/