import { useEffect, useState } from 'react';
import { GALLERY } from '../../data/content';

/* Photos: a library of moments from the résumé. Hover shows the caption; opening a photo shows it
   large with its details (what it is, when, where, and the part of the résumé it belongs to). */

const base = import.meta.env.BASE_URL;
const full = (p) => `${base}images/gallery/${p.id}.jpg`;
const thumb = (p) => `${base}images/gallery/${p.id}-thumb.jpg`;
const NOTE_NAMES = { experience: 'Experience', projects: 'Projects', skills: 'Skills & education' };

function Viewer({ photo, index, onClose, onStep, onOpenNote, phone }) {
  const [size, setSize] = useState(null);
  const [info, setInfo] = useState(!phone);

  useEffect(() => {
    const key = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onStep(1);
      if (e.key === 'ArrowLeft') onStep(-1);
    };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, [onClose, onStep]);

  return (
    <div className="ph-viewer">
      <header className="ph-viewer-bar">
        <button type="button" className="ph-viewer-btn" onClick={onClose} aria-label="Back to library">
          ‹ <span>Library</span>
        </button>
        <span className="ph-viewer-title">{photo.title}</span>
        <span className="ph-viewer-tools">
          <button type="button" className="ph-viewer-btn" onClick={() => onStep(-1)} aria-label="Previous photo">
            ‹
          </button>
          <span className="ph-viewer-count">
            {index + 1} of {GALLERY.length}
          </span>
          <button type="button" className="ph-viewer-btn" onClick={() => onStep(1)} aria-label="Next photo">
            ›
          </button>
          <button type="button" className={`ph-viewer-btn${info ? ' is-on' : ''}`} onClick={() => setInfo(!info)} aria-label="Show info" aria-pressed={info}>
            ⓘ
          </button>
        </span>
      </header>
      <div className="ph-viewer-body">
        <div className="ph-viewer-stage">
          <img
            key={photo.id}
            src={full(photo)}
            alt={photo.caption}
            draggable="false"
            onLoad={(e) => setSize([e.currentTarget.naturalWidth, e.currentTarget.naturalHeight])}
          />
        </div>
        {info && (
          <aside className="ph-info" aria-label="Photo info">
            <h3>{photo.title}</h3>
            <p>{photo.caption}</p>
            <dl>
              {photo.date && (
                <>
                  <dt>Date</dt>
                  <dd>{photo.date}</dd>
                </>
              )}
              {photo.place && (
                <>
                  <dt>Place</dt>
                  <dd>{photo.place}</dd>
                </>
              )}
              {size && (
                <>
                  <dt>Dimensions</dt>
                  <dd>
                    {size[0]} × {size[1]}
                  </dd>
                </>
              )}
              <dt>File</dt>
              <dd>{photo.id}.jpg</dd>
            </dl>
            {photo.note && onOpenNote && (
              <button type="button" className="ph-info-link" onClick={() => onOpenNote(photo.note)}>
                Open {NOTE_NAMES[photo.note]} in Notes ›
              </button>
            )}
          </aside>
        )}
      </div>
    </div>
  );
}

export default function PhotosApp({ layout, onClose, onOpenNote }) {
  const phone = layout === 'phone';
  const [open, setOpen] = useState(null);
  const step = (d) => setOpen((i) => (i + d + GALLERY.length) % GALLERY.length);

  if (open !== null) {
    return (
      <div className={`photos${phone ? ' ph-app ph-photos' : ''}`}>
        <Viewer
          photo={GALLERY[open]}
          index={open}
          phone={phone}
          onClose={() => setOpen(null)}
          onStep={step}
          onOpenNote={onOpenNote}
        />
      </div>
    );
  }

  return (
    <div className={`photos${phone ? ' ph-app ph-photos' : ''}`}>
      {phone ? (
        <div className="ph-nav">
          <button type="button" className="ph-back" onClick={onClose} aria-label="Back">
            <span aria-hidden="true">‹</span>
          </button>
        </div>
      ) : (
        <aside className="photos-side">
          <p className="photos-side-title">Photos</p>
          <button type="button" className="is-current">
            <span aria-hidden="true">▦</span> Library
          </button>
        </aside>
      )}
      <div className="photos-main">
        <header className="photos-head">
          <h2>Library</h2>
          <p>{GALLERY.length} photos</p>
        </header>
        <ul className="photos-grid">
          {GALLERY.map((p, i) => (
            <li key={p.id}>
              <button type="button" className="photos-tile" onClick={() => setOpen(i)} aria-label={p.title}>
                <img src={thumb(p)} alt="" loading="lazy" draggable="false" />
                <span className="photos-cap">
                  <strong>{p.title}</strong>
                  {p.date && <em>{p.date}</em>}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
