import React, { useState } from 'react'

const AddPostDialog = ({ isOpen, onClose, onAddPost }) => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault();

        const newPost = {
            id:Date.now(),
            title,
            body,
            tags: tags.split(",").map(tag => tag.trim()),
            reactions: {likes:0,dislikes:0},
            views:0,
            userId:5
        }
        onAddPost(newPost);
        setTitle("");
        setBody("");
        setTags("");
        onClose();
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-5 w-[90vw] max-w-md shadow-xl">
                <h2 className="text-xl font-bold mb-4">Add New Post</h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                        type="text"
                        placeholder="Title"
                        className="w-full p-2 border rounded"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Body"
                        className="w-full p-2 border rounded"
                        rows={4}
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Tags (comma-separated)"
                        className="w-full p-2 border rounded"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                    <div className="flex justify-end space-x-2">
                        <button type="button" onClick={onClose} className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400">
                            Cancel
                        </button>
                        <button type="submit" className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddPostDialog