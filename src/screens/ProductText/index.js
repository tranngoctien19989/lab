import {Text, StyleSheet, Image} from 'react-native';
// Trong 1 file chỉ 1 function được export dạng default
// Nếu export default thì khi import không cần {}
// Nếu export không default thì bắt buộc có {} và đúng tên
export function ProductImage (props) {
    return (
       
        <Image
            style={styles.image}
            source={{uri: 'https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/326487453_518987833667052_3936637097910514625_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=fsKe5j7N3dYAX_nI-Dy&tn=7zYkIuIpuO1DCU-B&_nc_ht=scontent.fhan2-5.fna&oh=00_AfA_V2TSTKFzoXNt4z8L9OrE3KmQX58503xPVm1l5nc9tA&oe=63DC4AF3'}}
        />
        
    );
}
export function ProductImage2 (props){
    return (
        <Image
        style={styles.image}
            source={{uri: 'https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/326487453_518987833667052_3936637097910514625_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=fsKe5j7N3dYAX_nI-Dy&tn=7zYkIuIpuO1DCU-B&_nc_ht=scontent.fhan2-5.fna&oh=00_AfA_V2TSTKFzoXNt4z8L9OrE3KmQX58503xPVm1l5nc9tA&oe=63DC4AF3'}}
        />
    )
}

// export default function ProductText ({name}) {
export default function ProductText (props) {
    // props là 1 obj truyền từ cha sang
    // ở đây cần có 1 key tên là name
    const name = props.name;
    const desc = props.desc;

    return (
        // <Text style={styles.text}>{props.name}</Text>
        <>
            <Text style={styles.text}>{name}</Text>
            <Text>{desc ? desc : 'Updating...'}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontStyle: 'italic',
        color: 'green'
    },
    image: {
        width: 100,
        height: 100,
        marginLeft : 20,
        marginTop :30,
        borderRadius: 200 / 2,
       
    }
});
