export default function Home() {
  return (
    <form className="w-96 border-2 mx-auto mt-4 rounded">
      <h1 className="text-2xl text-center mt-2">名前入力フォーム</h1>
      <div className="m-2">
        <label>名前</label>
        <input
          className="border-2 rounded-md w-full p-1"
          placeholder="名前を入力してください"
        />
      </div>
      <div className="m-2">
        <button
          className="bg-black text-white rounded-lg w-full mt-4 p-1"
          type="submit"
        >
          送信
        </button>
      </div>
      <div className="text-center my-4">あなたの名前はnameです。</div>
    </form>
  );
}
