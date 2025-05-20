function Filter({ current, onChange }) {
    return (
        <div className="flex gap-2 mb-4">
            {['all', 'completed', 'pending'].map(type => (
                <button
                    key={type}
                    type="button"
                    onClick={() => onChange(type)}
                    className={`px-2 py-1 border rounded ${current === type ? 'bg-blue-500 text-white' : ''}`}
                >
                    {type}
                </button>
            ))}
        </div>
    );
}

export default Filter;
