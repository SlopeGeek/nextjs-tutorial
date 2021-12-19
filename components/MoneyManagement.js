import styles from './MoneyManagement.module.css'
import Modal from 'react-modal'
import { useState } from 'react'


export default function MoneyManagement() {

    const [IsModal, setIsModal] = useState(false);
    const [text, setText] = useState("");
    const [item, setItem] = useState([]);

    const OpenModal = () => {
        setIsModal(true);
    };

    const CloseModal = () => {
        setIsModal(false);
    };

    const AddText = (e) => {
        setText(e.target.value);
    };

    const AddItem = () => {
        if(text ===""){

        }else{
            const newItem = [...item];
            newItem.push(text);

            setItem(newItem);
    
            setText("");    
        }
    };


    

    return (
        <div>
            <h1>お小遣い帳</h1>
            <button className={styles.button} onClick={OpenModal}>設定</button>
            <Modal
                isOpen={IsModal}
                

                //モーダルの外側をクリックして画面を閉じるときはonRequestCloseオプションを使う
                //onRequestClose={CloseModal}
            >
                <h1 className={styles.test}>項目設定</h1>
                <input type="text" value={text} onChange={AddText}></input>
                <button className={styles.button} onClick={AddItem}>追加</button>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.style}>
                            <th>項目</th>
                            <th>概要</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={styles.style}>
                            <td>家</td>
                            <td>家に入れるお金</td>
                        </tr>
                        {item.map((menu) => (
                                <tr className={styles.style}>
                                    <td>{menu}</td>
                                    <td>TEST</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <button　className={styles.button}>設定</button>
                <button　className={styles.button} onClick={CloseModal}>閉じる</button>
            </Modal>
            <button className={styles.button}>登録</button>            
        </div>
    )
}