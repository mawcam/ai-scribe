interface AudioUploaderProps {
  onFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedFile?: File | null;
}

const AudioUploader: React.FC<AudioUploaderProps> = ({
  onFileChange,
  selectedFile,
}) => {
  return (
    <div className="audio-uploader">
      <input
        type="file"
        name="audio"
        id="audio"
        required
        accept="audio/*"
        onChange={onFileChange}
      />
      {selectedFile && (
        <div className="file-info">
          <span className="file-icon">🎵</span>
          <span className="file-name">{selectedFile.name}</span>
          <span className="file-size">
            ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
          </span>
        </div>
      )}
    </div>
  );
};

export default AudioUploader;
